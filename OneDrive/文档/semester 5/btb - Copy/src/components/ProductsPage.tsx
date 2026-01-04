import { Package, Truck, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "../lib/language-context";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const { t } = useLanguage();

  const products = [
    {
      name: "Bamboo Petung",
      latinName: "Dendrocalamus asper",
      description: "The strongest bamboo variety, perfect for structural applications. Known for its large diameter and exceptional load-bearing capacity.",
      image: "https://images.unsplash.com/photo-1577199019410-0d4567e04117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBtYXRlcmlhbCUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMTA1MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: {
        diameter: "8-20 cm",
        length: "6-12 m",
        wallThickness: "8-15 mm",
      },
      minOrder: "100 poles",
      applications: ["Structural columns", "Main beams", "Large gazebos", "Bridges"],
    },
    {
      name: "Bamboo Tali",
      latinName: "Gigantochloa apus",
      description: "Medium-sized bamboo ideal for fencing, railings, and decorative elements. Offers excellent flexibility and workability.",
      image: "https://images.unsplash.com/photo-1601062032283-9c1a28ad50e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYzMTA1MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: {
        diameter: "6-10 cm",
        length: "4-8 m",
        wallThickness: "5-8 mm",
      },
      minOrder: "200 poles",
      applications: ["Fencing", "Railings", "Decorative panels", "Furniture"],
    },
    {
      name: "Black Bamboo",
      latinName: "Gigantochloa atroviolacea",
      description: "Distinguished by its dark color, this bamboo adds a unique aesthetic appeal to any project while maintaining structural integrity.",
      image: "https://images.unsplash.com/photo-1704200612857-0e9c9fd265ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmZW5jZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzMTA1MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: {
        diameter: "5-8 cm",
        length: "4-6 m",
        wallThickness: "4-6 mm",
      },
      minOrder: "150 poles",
      applications: ["Interior design", "Feature walls", "Artistic installations", "Premium fencing"],
    },
    {
      name: "Bamboo Wulung",
      latinName: "Gigantochloa atroviolacea",
      description: "Premium quality bamboo with natural dark coloring, perfect for high-end decorative and structural applications.",
      image: "https://images.unsplash.com/photo-1641754644192-24e09c2b444b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBnYXplYm8lMjBiYWxpfGVufDF8fHx8MTc2MzEwNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: {
        diameter: "4-7 cm",
        length: "3-5 m",
        wallThickness: "3-5 mm",
      },
      minOrder: "200 poles",
      applications: ["Interior decoration", "Furniture", "Craft work", "Accent features"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-green-900 mb-6">
            {t.products.title}
          </h1>
          <p className="text-xl text-gray-700">
            {t.products.subtitle}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-green-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Sustainably harvested and treated bamboo from certified sources
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-green-900 mb-2">Custom Sizing</h3>
              <p className="text-gray-600 text-sm">
                We can cut and prepare bamboo to your exact specifications
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-green-900 mb-2">{t.products.delivery}</h3>
              <p className="text-gray-600 text-sm">
                Reliable delivery throughout Bali and surrounding islands
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-96 lg:h-auto">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h2 className="text-2xl text-green-900 mb-2">{product.name}</h2>
                      <p className="text-sm text-gray-500 italic">{product.latinName}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <div className="mb-6">
                      <h3 className="text-sm text-green-900 mb-3">{t.products.specifications}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded">
                          <div className="text-xs text-gray-600">Diameter</div>
                          <div className="text-sm text-green-900">{product.specs.diameter}</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                          <div className="text-xs text-gray-600">Length</div>
                          <div className="text-sm text-green-900">{product.specs.length}</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded col-span-2">
                          <div className="text-xs text-gray-600">Wall Thickness</div>
                          <div className="text-sm text-green-900">{product.specs.wallThickness}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm text-green-900 mb-2">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="border-green-600 text-green-700">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4 mb-6">
                      <div className="text-sm text-gray-600">{t.products.minOrder}</div>
                      <div className="text-green-900">{product.minOrder}</div>
                    </div>

                    <Button
                      onClick={() => onNavigate("contact")}
                      className="bg-green-700 hover:bg-green-800 w-full"
                    >
                      {t.products.inquire}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-green-900 mb-6">
            Need expert advice on bamboo selection?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our team can help you choose the right bamboo type for your specific project requirements.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-green-700 hover:bg-green-800"
          >
            {t.contact.title}
          </Button>
        </div>
      </section>
    </div>
  );
}
