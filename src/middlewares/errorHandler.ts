export const errorResponse = async (error: any) => {
  return {
    statuCode: 500,
    body: JSON.stringify(
      {
        message: `Request failed with error - ${JSON.stringify(error)}`,
      },
      null,
      2
    ),
  }
}
