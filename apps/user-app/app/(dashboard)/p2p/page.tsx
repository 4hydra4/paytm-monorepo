import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { P2pTransactions } from "../../../components/P2pTransactions";

async function getP2pTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    from: t.fromUserId,
  }));
}

export default async function () {
  const transactions = await getP2pTransactions();

  return (
    <div className="w-screen">
      <div>
        <SendCard />
      </div>
      <div className="flex justify-center">
        <P2pTransactions transactions={transactions} />
      </div>
    </div>
  );
}
