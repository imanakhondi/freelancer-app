import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../services/ProposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { mutate: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { createProposal, isCreating };
}
