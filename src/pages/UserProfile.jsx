import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserProfile = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </header>
      <main className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Booking History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Booking 1: Listing 1 - $100/night</p>
            <p>Booking 2: Listing 2 - $150/night</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Change password" className="mb-4" />
            <Button variant="primary">Update</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserProfile;