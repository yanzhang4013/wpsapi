export default async function handler(req, res) {
  try {
    const response = await fetch("https://jkapi.com/api/day_60s");
    const data = await response.text(); // 是纯文本格式
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "代理请求失败", detail: error.toString() });
  }
}
