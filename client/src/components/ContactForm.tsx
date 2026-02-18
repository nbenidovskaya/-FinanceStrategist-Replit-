import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const mutation = useSubmitContact();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      persona: "other",
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-width max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">Начнем диалог</h2>
          <p className="text-muted-foreground text-lg">
            Запишитесь на стратегическую сессию, чтобы обсудить ваши финансовые цели.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Полное имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Максим Иванов" className="h-12 bg-slate-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="maxim@company.com" className="h-12 bg-slate-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон (необязательно)</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (999) 000-00-00" className="h-12 bg-slate-50" {...field} value={field.value || ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="persona"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Кто вы?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || "other"}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-slate-50">
                            <SelectValue placeholder="Выберите вашу роль" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Maxim">Владелец бизнеса / CEO</SelectItem>
                          <SelectItem value="Natalia">CFO / Фин. директор</SelectItem>
                          <SelectItem value="Sergei">Карьерный переход</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Чем я могу вам помочь?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Расскажите о ваших текущих вызовах..." 
                        className="min-h-[150px] bg-slate-50 resize-none p-4" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-lg bg-accent hover:bg-accent/90"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Отправка...
                  </>
                ) : (
                  "Запросить стратегическую сессию"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
