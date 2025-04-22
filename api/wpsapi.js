export default async function handler(req, res) {
  const target = req.query.target;
  
  if (!target) {
    return res.status(400).json({ error: "缺少 target 参数" });
  }

  try {
    const url = decodeURIComponent(target);  // 解码 URL
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");

    // 如果是JSON，就用json方式返回
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const text = await response.text();
      res.status(200).send(text);
    }

  } catch (err) {
    res.status(500).json({ error: "代理失败", detail: err.toString() });
  }
}
