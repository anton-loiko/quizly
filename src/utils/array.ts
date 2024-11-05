export const shuffleArray = <T>(array: T[]): T[] => {
  // Create a copy of the original array to avoid modifying it directly
  const shuffledArray = array.slice()

  // Loop through the array from the end to the beginning
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index between 0 and the current index (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1))

    // Swap the element at the current index with the element at the random index
    ;[shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ]
  }

  // Return the shuffled array
  return shuffledArray
}
