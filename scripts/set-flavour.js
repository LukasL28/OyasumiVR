import { readFileSync, writeFileSync } from 'fs';

if (process.argv.length <= 2) {
  console.error('Please provide a flavour (DEV, STANDALONE, STEAM)');
  process.exit(1);
}

const flavour = process.argv[2].toUpperCase();
if (!['DEV', 'STANDALONE', 'STEAM'].includes(flavour)) {
  console.error('Provided flavour is not valid (DEV, STANDALONE, STEAM)');
  process.exit(1);
}

{
  let uiFlavour = readFileSync('src-ui/flavour.ts').toString();
  uiFlavour = uiFlavour.replaceAll(
    /export const FLAVOUR: BuildFlavour = '(DEV|STANDALONE|STEAM)';/g,
    `export const FLAVOUR: BuildFlavour = '${flavour}';`
  );
  writeFileSync('src-ui/flavour.ts', uiFlavour);
  console.log('Updated src-ui/flavour.ts');
}

{
  let coreFlavour = readFileSync('src-core/src/flavour.rs').toString();
  coreFlavour = coreFlavour.replaceAll(
    /pub const BUILD_FLAVOUR: BuildFlavour = BuildFlavour::(Dev|Standalone|Steam);/g,
    `pub const BUILD_FLAVOUR: BuildFlavour = BuildFlavour::${
      flavour.toUpperCase().charAt(0) + flavour.toLowerCase().substring(1)
    };`
  );
  writeFileSync('src-core/src/flavour.rs', coreFlavour);
  console.log('Updated src-core/src/flavour.rs');
}
