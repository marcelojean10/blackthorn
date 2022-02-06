-- CreateTable
CREATE TABLE "cart" (
    "pk" TEXT NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL,
    "discounts" DECIMAL(65,30) NOT NULL,
    "taxes" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "item" (
    "pk" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "cart_items" (
    "pk" TEXT NOT NULL,
    "cartPk" TEXT NOT NULL,
    "itemPk" TEXT NOT NULL,

    CONSTRAINT "cart_items_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "_CartToCartItems" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CartToCartItems_AB_unique" ON "_CartToCartItems"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToCartItems_B_index" ON "_CartToCartItems"("B");

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_itemPk_fkey" FOREIGN KEY ("itemPk") REFERENCES "item"("pk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToCartItems" ADD FOREIGN KEY ("A") REFERENCES "cart"("pk") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToCartItems" ADD FOREIGN KEY ("B") REFERENCES "cart_items"("pk") ON DELETE CASCADE ON UPDATE CASCADE;
