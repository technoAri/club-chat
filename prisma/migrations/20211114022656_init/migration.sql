-- CreateTable
CREATE TABLE "topicslist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "addedBy" TEXT NOT NULL,
    "addedDate" TIMESTAMP(3) NOT NULL,
    "isTrending" BOOLEAN NOT NULL,
    "lastTrendingDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "topicslist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "joinedDate" TIMESTAMP(3) NOT NULL,
    "isAuthenticated" BOOLEAN NOT NULL,
    "totalChat" INTEGER NOT NULL,
    "totalTopicsFollowing" INTEGER NOT NULL,
    "topicsFollowing" TEXT NOT NULL,
    "dpLink" TEXT NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);
