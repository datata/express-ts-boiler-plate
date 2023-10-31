import { Router } from "express";
import { readdirSync } from "node:fs";

const router = Router();
const PATH_ROUTER = `${__dirname}/entities`;

const getRoutesModulePath = (folder: string) => {
  const folderName = folder.toLocaleLowerCase();

  return `./entities/${folder}/${folderName}Routes`;
}

readdirSync(PATH_ROUTER)
  .forEach(folder => {
    const routePath = folder.toLocaleLowerCase() !== "auth" ? `/${folder}s` : `/${folder}`;

    import(getRoutesModulePath(folder)).then((moduleRouter) => {
      router.use(routePath, moduleRouter.router);
    });
  });

export default router;