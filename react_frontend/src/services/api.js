const DEFAULT_DELAY = 300;

/**
 * PUBLIC_INTERFACE
 * api provides placeholder methods to interact with the backend.
 * Replace implementations with real HTTP calls (e.g., fetch/axios) when backend is available.
 */
export const api = {
  // PUBLIC_INTERFACE
  async getHealth() {
    await wait(DEFAULT_DELAY);
    return { status: 'ok', time: new Date().toISOString() };
  },
  // PUBLIC_INTERFACE
  async getDashboardSummary() {
    await wait(DEFAULT_DELAY);
    return {
      widgets: [
        { id: 'w1', title: 'Active Sessions', value: 12 },
        { id: 'w2', title: 'Tasks In Progress', value: 5 },
        { id: 'w3', title: 'Errors', value: 0 },
      ],
      lastUpdated: new Date().toISOString(),
    };
  },
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
