import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const events = [
    {
        id: 1,
        name: "Bob Johnson",
        email: "bob.johnson@beemail.com"
    },
    {
        id: 2,
        name: "Sally Smith",
        email: "sally.Smith@beemail.com"
    },
    {
        id: 3,
        name: "Jef Goat",
        email: "thegoat@coldmail.com"
    },
    {
        id: 4,
        name: "Anika Puddle",
        email: "apuddle.johnson@coldmail.com"
    },
    {
        id: 5,
        name: "Joe Benson",
        email: "joeb@mail.com"
    }
];


async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.user.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
