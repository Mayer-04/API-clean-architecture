-- CreateTable
CREATE TABLE "Login" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_email_key" ON "Login"("email");
