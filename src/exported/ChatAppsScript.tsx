import IconChatAppsScriptFill0Wght100Grad0Opsz48 from '../components/ChatAppsScriptFill0Wght100Grad0Opsz48'
import IconChatAppsScriptFill0Wght200Grad0Opsz48 from '../components/ChatAppsScriptFill0Wght200Grad0Opsz48'
import IconChatAppsScriptFill0Wght300Grad0Opsz48 from '../components/ChatAppsScriptFill0Wght300Grad0Opsz48'
import IconChatAppsScriptFill0Wght400Grad0Opsz48 from '../components/ChatAppsScriptFill0Wght400Grad0Opsz48'
import IconChatAppsScriptFill0Wght500Grad0Opsz48 from '../components/ChatAppsScriptFill0Wght500Grad0Opsz48'
import IconChatAppsScriptFill0Wght600Grad0Opsz48 from '../components/ChatAppsScriptFill0Wght600Grad0Opsz48'
import IconChatAppsScriptFill0Wght700Grad0Opsz48 from '../components/ChatAppsScriptFill0Wght700Grad0Opsz48'
import IconChatAppsScriptFill1Wght100Grad0Opsz48 from '../components/ChatAppsScriptFill1Wght100Grad0Opsz48'
import IconChatAppsScriptFill1Wght200Grad0Opsz48 from '../components/ChatAppsScriptFill1Wght200Grad0Opsz48'
import IconChatAppsScriptFill1Wght300Grad0Opsz48 from '../components/ChatAppsScriptFill1Wght300Grad0Opsz48'
import IconChatAppsScriptFill1Wght400Grad0Opsz48 from '../components/ChatAppsScriptFill1Wght400Grad0Opsz48'
import IconChatAppsScriptFill1Wght500Grad0Opsz48 from '../components/ChatAppsScriptFill1Wght500Grad0Opsz48'
import IconChatAppsScriptFill1Wght600Grad0Opsz48 from '../components/ChatAppsScriptFill1Wght600Grad0Opsz48'
import IconChatAppsScriptFill1Wght700Grad0Opsz48 from '../components/ChatAppsScriptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChatAppsScript = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChatAppsScriptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChatAppsScriptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChatAppsScriptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChatAppsScriptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChatAppsScriptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChatAppsScriptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChatAppsScriptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChatAppsScriptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChatAppsScriptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChatAppsScriptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChatAppsScriptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChatAppsScriptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChatAppsScriptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChatAppsScriptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
