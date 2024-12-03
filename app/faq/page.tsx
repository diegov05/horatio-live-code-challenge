import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl text-center font-bold">Let&apos;s talk about software</h1>
        <p className="text-xl text-center">Here we provide answers for the most common questions. From registering and accessing <br /> your account to payments and paid subscriptions.</p>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>When the software will be released?</AccordionTrigger>
            <AccordionContent>
              One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are there any limits to the number of exported tools from Waitlist</AccordionTrigger>
            <AccordionContent>
              One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you provide any support?</AccordionTrigger>
            <AccordionContent>
              One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What does the term per-software mean in the License?</AccordionTrigger>
            <AccordionContent>
              One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}