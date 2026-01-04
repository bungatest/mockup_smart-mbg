import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../lib/language-context";
import { toast } from "sonner@2.0.3";

export function ContactPage({ selectedProjectCategory }: { selectedProjectCategory?: string | null }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: selectedProjectCategory || "",
    message: "",
  });

  useEffect(() => {
    if (selectedProjectCategory) {
      setFormData((prev) => ({ ...prev, projectType: selectedProjectCategory }));
    }
  }, [selectedProjectCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappMessage = `*New Inquiry from Bali Tiing Bamboo Website*

*Name:* ${formData.name}
*Project Type:* ${formData.projectType}

*Message:*
${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6285737315152?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast.success("Opening WhatsApp. Thank you for your inquiry!");
    setFormData({
      name: "",
      projectType: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-green-900 mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-700">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-green-900 mb-6">{t.contact.contactInfo}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">{t.contact.location}</div>
                        <p className="text-gray-800">
                          Jalan Raya Belega<br />
                          Belega, Kec. Blahbatuh, Kabupaten Gianyar, Bali<br />
                          Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Phone / WhatsApp</div>
                        <p className="text-gray-800">+62 812 3456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Email</div>
                        <p className="text-gray-800">info@balitiing.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-green-900 mb-6">{t.contact.followUs}</h3>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-12 h-12 bg-green-100 hover:bg-green-700 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-green-100 hover:bg-green-700 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-green-100 hover:bg-green-700 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-green-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-800">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-800">9:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-800">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl text-green-900 mb-6">{t.contact.formTitle}</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">{t.contact.name}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectType">{t.contact.projectType}</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => handleChange("projectType", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={t.contact.selectProject} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gazebo">{t.contact.gazebo}</SelectItem>
                          <SelectItem value="fencing">{t.contact.fencing}</SelectItem>
                          <SelectItem value="design">{t.contact.design}</SelectItem>
                          <SelectItem value="materials">{t.contact.materials}</SelectItem>
                          <SelectItem value="other">{t.contact.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">{t.contact.message}</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Please provide details about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="bg-green-700 hover:bg-green-800 w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t.contact.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0123456789!2d115.32890!3d-8.45678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd242cc8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sC8M5%2B7FW%2C%20Belega%2C%20Kec.%20Blahbatuh%2C%20Kabupaten%20Gianyar%2C%20Bali%2080581!5e0!3m2!1sid!2sid!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bali Tiing Bamboo Location"
        />
      </section>
    </div>
  );
}
