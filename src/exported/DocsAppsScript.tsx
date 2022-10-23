import IconDocsAppsScriptFill0Wght100Grad0Opsz48 from '../components/DocsAppsScriptFill0Wght100Grad0Opsz48'
import IconDocsAppsScriptFill0Wght200Grad0Opsz48 from '../components/DocsAppsScriptFill0Wght200Grad0Opsz48'
import IconDocsAppsScriptFill0Wght300Grad0Opsz48 from '../components/DocsAppsScriptFill0Wght300Grad0Opsz48'
import IconDocsAppsScriptFill0Wght400Grad0Opsz48 from '../components/DocsAppsScriptFill0Wght400Grad0Opsz48'
import IconDocsAppsScriptFill0Wght500Grad0Opsz48 from '../components/DocsAppsScriptFill0Wght500Grad0Opsz48'
import IconDocsAppsScriptFill0Wght600Grad0Opsz48 from '../components/DocsAppsScriptFill0Wght600Grad0Opsz48'
import IconDocsAppsScriptFill0Wght700Grad0Opsz48 from '../components/DocsAppsScriptFill0Wght700Grad0Opsz48'
import IconDocsAppsScriptFill1Wght100Grad0Opsz48 from '../components/DocsAppsScriptFill1Wght100Grad0Opsz48'
import IconDocsAppsScriptFill1Wght200Grad0Opsz48 from '../components/DocsAppsScriptFill1Wght200Grad0Opsz48'
import IconDocsAppsScriptFill1Wght300Grad0Opsz48 from '../components/DocsAppsScriptFill1Wght300Grad0Opsz48'
import IconDocsAppsScriptFill1Wght400Grad0Opsz48 from '../components/DocsAppsScriptFill1Wght400Grad0Opsz48'
import IconDocsAppsScriptFill1Wght500Grad0Opsz48 from '../components/DocsAppsScriptFill1Wght500Grad0Opsz48'
import IconDocsAppsScriptFill1Wght600Grad0Opsz48 from '../components/DocsAppsScriptFill1Wght600Grad0Opsz48'
import IconDocsAppsScriptFill1Wght700Grad0Opsz48 from '../components/DocsAppsScriptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDocsAppsScript = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDocsAppsScriptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDocsAppsScriptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDocsAppsScriptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDocsAppsScriptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDocsAppsScriptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDocsAppsScriptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDocsAppsScriptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDocsAppsScriptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDocsAppsScriptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDocsAppsScriptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDocsAppsScriptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDocsAppsScriptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDocsAppsScriptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDocsAppsScriptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
