import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/ProposalService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { changeProposalStatus, isUpdating };
}
