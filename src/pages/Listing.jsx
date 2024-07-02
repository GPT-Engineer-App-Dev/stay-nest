import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const Listing = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Listing {id}</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Listing Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of listing {id}</p>
              <p>Amenities: WiFi, Pool, Kitchen</p>
            </CardContent>
          </Card>
        </div>
        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Booking Form</CardTitle>
            </CardHeader>
            <CardContent>
              <Input type="date" placeholder="Check-in date" className="mb-4" />
              <Input type="date" placeholder="Check-out date" className="mb-4" />
              <Input type="number" placeholder="Guests" className="mb-4" />
              <Button variant="primary">Book Now</Button>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
};

export default Listing;