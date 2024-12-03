'use client'

import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox"

import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Page() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companySize: "",
    updates: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      companySize: value,
    }));
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl text-center font-bold">Get In Touch</h1>
        <p className="text-xl text-center">Fill out the form below to set up a call, or keep reading to get in touch with us for customer <br /> support, partnerships, or media enquiries.</p>
      </div>
      <div>
        <form onSubmit={onSubmit} className="space-y-8 flex flex-col gap-2">
          <Input
            type="text"
            name="name"
            placeholder="Your name..."
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your email..."
            value={formData.email}
            onChange={handleInputChange}
          />
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Company Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Company Size</SelectLabel>
                <SelectItem value="1-5">1 to 5 members</SelectItem>
                <SelectItem value="5-20">5 to 20 members</SelectItem>
                <SelectItem value="20+">More than 20 members</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <Checkbox
              id="terms"
              name="updates"
              checked={formData.updates}
              onChange={() => handleInputChange}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >

              I&apos;d like to receive updates & product news.
            </label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  )
}