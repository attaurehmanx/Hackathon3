export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skw5CJVbyYuho5GLH2tBmsyhbyDjvbTIYuLYQJeajxVpmyufYwYb3G6DuBoyIGKJGNn0tqgBoOz8ythggNavoLOfLX3LRpF5PUx5Sam4VWWdV313ePjkFqgO9NxLbx6yDq4MR3uA4iDwL18aIdc20ImJNZ0FnikBYRUJ5RYDc2MZMj3yCkq2",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
