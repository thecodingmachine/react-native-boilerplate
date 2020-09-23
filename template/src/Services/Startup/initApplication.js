export default async () => {
  //Simulation of an async function delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 3000)
  })
}
