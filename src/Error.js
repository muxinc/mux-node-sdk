class MuxError extends Error {
  constructor(type, message, details) {
    super(message);
    this.name = 'MuxError';
    this.type = type;
    this.details = details;
  }
}

module.exports = MuxError;
