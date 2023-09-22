import toast from "react-hot-toast"

export function useToast() {
    const config = {
        style: {
            backgroundColor: "#334155",
            color: "#f1f5f9"
        }
    }

    function error(message) {
        toast.error(message, config)
    }

    function success(message) {
        toast.success(message, config)
    }

    return {error, success}

}