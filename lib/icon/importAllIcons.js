let importAll = (requireContext) => {
    return requireContext.keys().forEach(requireContext);
};
try {
    importAll(require.context("../../icons/", true, /\.svg$/));
} catch (error) {
    console.log(error);
}