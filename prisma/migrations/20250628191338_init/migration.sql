-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "urlProfile" TEXT DEFAULT 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg'
);

-- CreateTable
CREATE TABLE "DataUserManager" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "accessKey" TEXT NOT NULL,
    "dateAt" DATETIME NOT NULL,
    "totalRequests" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "DataUserManager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserDataTable" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "jid" TEXT NOT NULL,
    "username" TEXT,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "isBanned" BOOLEAN NOT NULL DEFAULT false,
    "isOwner" BOOLEAN NOT NULL DEFAULT false,
    "money" INTEGER NOT NULL DEFAULT 0,
    "xp" INTEGER NOT NULL DEFAULT 10,
    CONSTRAINT "UserDataTable_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "DataUserManager" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DataUserManager_accessKey_key" ON "DataUserManager"("accessKey");

-- CreateIndex
CREATE UNIQUE INDEX "UserDataTable_jid_key" ON "UserDataTable"("jid");
