// export default async function handler(req, res) {
//     res.status(200).json({ message: 'Hello, World!' })
//   }


export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}