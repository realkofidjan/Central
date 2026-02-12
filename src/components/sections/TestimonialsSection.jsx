import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';
import { Marquee } from '../ui/marquee';
import { Input } from '../ui/input';

const testimonials = [
  {
    name: 'Ava Green',
    username: '@ava',
    body: 'Central streamlined our entire digital infrastructure overnight.',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: 'Australia',
  },
  {
    name: 'Ana Miller',
    username: '@ana',
    body: 'The shared systems approach is a game changer for scaling.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: 'Germany',
  },
  {
    name: 'Mateo Rossi',
    username: '@mat',
    body: 'Operating independently with shared strategy — exactly what we needed.',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: 'Italy',
  },
  {
    name: 'Maya Patel',
    username: '@maya',
    body: 'Integration across finance and software was seamless.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: 'India',
  },
  {
    name: 'Noah Smith',
    username: '@noah',
    body: 'Best holding company model in the digital space.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: 'USA',
  },
  {
    name: 'Lucas Stone',
    username: '@luc',
    body: 'Very customizable and smooth operations across all subsidiaries.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: 'France',
  },
  {
    name: 'Haruto Sato',
    username: '@haru',
    body: 'Impressive execution across continents.',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: 'Japan',
  },
  {
    name: 'Emma Lee',
    username: '@emma',
    body: 'The unified vision makes collaboration effortless.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: 'Canada',
  },
  {
    name: 'Carlos Ray',
    username: '@carl',
    body: 'Great for scaling technology-driven businesses.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: 'Spain',
  },
];

function TestimonialCard({ img, name, username, body, country }) {
  return (
    <Card className="w-50 border-black/5 bg-black/[0.02] shadow-none">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9 opacity-50">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-black/40 flex items-center gap-1">
              {name} <span className="text-xs text-black/25">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-black/25">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-black/30">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto" style={{ height: '360px' }}>
        {/* Left — Mailing list */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 md:px-12">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-black/30 mb-4">
            Stay in the loop
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-black/85 leading-tight">
            Join the network
          </h2>
          <p className="text-black/40 max-w-xs my-4 text-sm leading-relaxed">
            Get updates on new subsidiaries, partnerships, and opportunities
            across our ecosystem.
          </p>
          <Input
            type="email"
            placeholder="you@company.com"
            className="w-full max-w-xs mt-2"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-black/10 self-stretch my-8" />

        {/* Right — Testimonials in bordered box */}
        <div className="relative flex-1 ml-0 md:ml-0 rounded-lg border border-black/80 overflow-hidden flex flex-row items-center justify-center [perspective:300px]">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background z-10" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background z-10" />

          <div
            className="flex flex-row items-center gap-3"
            style={{
              transform:
                'translateX(-40px) translateZ(-50px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
            }}
          >
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:35s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
