import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { PlusCircle, XCircle } from 'lucide-react';

const formSchema = z.object({
  emails: z.array(z.object({ value: z.string().email({ message: "Please enter a valid email." }) })),
});

const FieldArrayDemo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emails: [{ value: "test@example.com" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "emails",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[500px] space-y-8">
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`emails.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={index !== 0 ? "sr-only" : ""}>Emails</FormLabel>
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Input {...field} placeholder="email@example.com" />
                    </FormControl>
                    <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1}>
                      <XCircle className="h-5 w-5" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => append({ value: "" })}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Email
        </Button>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const meta: Meta = {
  title: 'UI/FieldArray',
  component: FieldArrayDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
