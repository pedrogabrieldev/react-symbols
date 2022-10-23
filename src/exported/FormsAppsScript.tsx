import IconFormsAppsScriptFill0Wght100Grad0Opsz48 from '../components/FormsAppsScriptFill0Wght100Grad0Opsz48'
import IconFormsAppsScriptFill0Wght200Grad0Opsz48 from '../components/FormsAppsScriptFill0Wght200Grad0Opsz48'
import IconFormsAppsScriptFill0Wght300Grad0Opsz48 from '../components/FormsAppsScriptFill0Wght300Grad0Opsz48'
import IconFormsAppsScriptFill0Wght400Grad0Opsz48 from '../components/FormsAppsScriptFill0Wght400Grad0Opsz48'
import IconFormsAppsScriptFill0Wght500Grad0Opsz48 from '../components/FormsAppsScriptFill0Wght500Grad0Opsz48'
import IconFormsAppsScriptFill0Wght600Grad0Opsz48 from '../components/FormsAppsScriptFill0Wght600Grad0Opsz48'
import IconFormsAppsScriptFill0Wght700Grad0Opsz48 from '../components/FormsAppsScriptFill0Wght700Grad0Opsz48'
import IconFormsAppsScriptFill1Wght100Grad0Opsz48 from '../components/FormsAppsScriptFill1Wght100Grad0Opsz48'
import IconFormsAppsScriptFill1Wght200Grad0Opsz48 from '../components/FormsAppsScriptFill1Wght200Grad0Opsz48'
import IconFormsAppsScriptFill1Wght300Grad0Opsz48 from '../components/FormsAppsScriptFill1Wght300Grad0Opsz48'
import IconFormsAppsScriptFill1Wght400Grad0Opsz48 from '../components/FormsAppsScriptFill1Wght400Grad0Opsz48'
import IconFormsAppsScriptFill1Wght500Grad0Opsz48 from '../components/FormsAppsScriptFill1Wght500Grad0Opsz48'
import IconFormsAppsScriptFill1Wght600Grad0Opsz48 from '../components/FormsAppsScriptFill1Wght600Grad0Opsz48'
import IconFormsAppsScriptFill1Wght700Grad0Opsz48 from '../components/FormsAppsScriptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormsAppsScript = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormsAppsScriptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormsAppsScriptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormsAppsScriptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormsAppsScriptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormsAppsScriptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormsAppsScriptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormsAppsScriptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormsAppsScriptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormsAppsScriptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormsAppsScriptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormsAppsScriptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormsAppsScriptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormsAppsScriptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormsAppsScriptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
