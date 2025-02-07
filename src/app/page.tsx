import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Cpu, Smartphone, Laptop, Headphones, Globe, Shield, Code } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold">Sintcorp</span>
        </div>
        <nav className="hidden md:flex space-x-6">
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto mt-20 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">Sintcorp: El Futuro de la Tecnología</h1>
        <p className="text-xl mb-8 text-blue-200 animate-fade-in-delay">
          Innovación y excelencia en servicios y productos digitales
        </p>
        <Button
          asChild
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all"
        >
          <Link href="https://qubit-clothing.com">
            ERP Odoo para empleados <ChevronRight className="ml-2" />
          </Link>
        </Button>
      </section>

      {/* Services Section */}
      <section id="servicios" className="container mx-auto mt-32">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Consultoría IT",
              icon: Cpu,
              description: "Asesoramiento experto para optimizar tu infraestructura tecnológica.",
            },
            {
              name: "Desarrollo de Software",
              icon: Code,
              description: "Creación de soluciones personalizadas para impulsar tu negocio.",
            },
            {
              name: "Ciberseguridad",
              icon: Shield,
              description: "Protección avanzada contra amenazas digitales y vulnerabilidades.",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-blue-800 bg-opacity-50 border-blue-500 hover:border-blue-400 transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <service.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-blue-200 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="container mx-auto mt-32 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Productos Destacados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Smartphones", icon: Smartphone },
            { name: "Laptops", icon: Laptop },
            { name: "Accesorios", icon: Headphones },
            { name: "Servidores", icon: Cpu },
          ].map((product, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-700 bg-opacity-30 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                <product.icon className="w-12 h-12 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-blue-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl text-black font-bold mb-6">Contacta con Sintcorp</h2>
          <p className="mb-2">Estamos aquí para impulsar tu futuro tecnológico</p>
          <p className="text-blue-300 mb-6">contacto@sintcorp.com | +1 234 567 890</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="rounded-full">
              <Link href="#" className="flex items-center">
                <span className="mr-2">LinkedIn</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full">
              <Link href="#" className="flex items-center">
                <span className="mr-2">Twitter</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-8">&copy; 2025 Sintcorp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

