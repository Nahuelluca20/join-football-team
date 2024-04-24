import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

export default function CreateTeam() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create Team</CardTitle>
        <CardDescription>Enter the information for your new team.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="team-name">Team Name</Label>
          <Input required id="team-name" placeholder="Acme Inc" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea required id="description" placeholder="Enter a description for your team." />
        </div>
        <div className="space-y-2">
          <Label>Team Members</Label>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name-1">Name</Label>
              <Input required id="name-1" placeholder="Enter name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-1">Email</Label>
              <Input required id="email-1" placeholder="Enter email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role-1">Role</Label>
              <Input required id="role-1" placeholder="Enter role" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">Cancel</Button>
        <Button className="ml-auto">Create Team</Button>
      </CardFooter>
    </Card>
  );
}
