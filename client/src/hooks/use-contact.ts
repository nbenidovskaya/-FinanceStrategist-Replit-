import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactSubmission } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Something went wrong. Please try again.");
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Заявка получена",
        description: "Я ознакомлюсь с вашим запросом и свяжусь с вами в ближайшее время.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Ошибка отправки",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
