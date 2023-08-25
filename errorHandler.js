function handleServerError(err) {
  // Removed the trailing backslash and added a colon for clarity
  console.error("Server encountered an error:", err);
}

module.exports = {
  handleServerError,
};
