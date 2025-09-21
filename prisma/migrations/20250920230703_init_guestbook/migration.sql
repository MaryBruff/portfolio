-- CreateTable
CREATE TABLE "public"."GuestbookEntry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "icon" TEXT NOT NULL DEFAULT '😎',
    "ip_hash" TEXT NOT NULL,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GuestbookEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GuestbookEntry_created_at_idx" ON "public"."GuestbookEntry"("created_at");

-- CreateIndex
CREATE INDEX "GuestbookEntry_ip_hash_created_at_idx" ON "public"."GuestbookEntry"("ip_hash", "created_at");

-- CreateIndex
CREATE INDEX "GuestbookEntry_name_created_at_idx" ON "public"."GuestbookEntry"("name", "created_at");
