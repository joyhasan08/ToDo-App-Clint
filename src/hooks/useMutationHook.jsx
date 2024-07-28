import { useMutation, useQueryClient } from "@tanstack/react-query";

const useMutationHook = (mutationFn, config = {}) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: mutationFn,
        onSuccess: (data) => {
            config.onSuccess && config.onSuccess(data);
            if (config.key) {
                queryClient.invalidateQueries(config.key);
            }
        },
        onError: (error) => {
            config.onError && config.onError(error);
        },
    });
    return {
        ...mutation,
        isSuccess: mutation.isSuccess && mutation.data?.status === 200,
        errorMessage: mutation.isError
            ? mutation.error.response.data.message || "An error occurred"
            : null,
    };
};

export default useMutationHook;


