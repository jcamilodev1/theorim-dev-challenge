const state = {
    lastRefreshTime: 0
};

exports.getLastRefreshTime = () => state.lastRefreshTime;
exports.setLastRefreshTime = (time) => {
    state.lastRefreshTime = time;
}; 