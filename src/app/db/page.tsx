import { PrismaClient } from '@prisma/client'

const DB = () => {


  const prisma = new PrismaClient()

  async function main() {

    const allNotes = await prisma.note.findMany({});

    if (allNotes.length === 0) {
      await prisma.note.create({
        data: {
          path: "OUI"
        }
      })
    }

    console.log(allNotes)
  }

  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

  return (
    <p>Test DB</p>
  )

}

export default DB;