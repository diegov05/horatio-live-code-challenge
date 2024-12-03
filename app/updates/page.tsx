import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl text-center font-bold">News & Updates</h1>
        <p className="text-xl text-center">Rank and score updates and feature requests so you know you&apos;re working on the most impactful things.</p>
      </div>
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-4">
          <p className="text-neutral-500 font-bold">
            SELECT CATEGORY
          </p>
          {[1, 2, 3, 4].map((item) => (
            <Button key={item}>Example Button</Button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className='max-w-2xl p-8 flex flex-col gap-2'>
              <CardTitle>
                Example Title
              </CardTitle>
              <CardContent>
                When people upgrade from one version to another, it should be painfully clear when something will break. It should be possible to upgrade to a version that lists deprecations, remove what&apos;s deprecated, then upgrade to the version where the deprecations become removals.
              </CardContent>
              <CardFooter>
                Example User
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}