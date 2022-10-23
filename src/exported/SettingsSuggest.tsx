import IconSettingsSuggestFill0Wght100Grad0Opsz48 from '../components/SettingsSuggestFill0Wght100Grad0Opsz48'
import IconSettingsSuggestFill0Wght200Grad0Opsz48 from '../components/SettingsSuggestFill0Wght200Grad0Opsz48'
import IconSettingsSuggestFill0Wght300Grad0Opsz48 from '../components/SettingsSuggestFill0Wght300Grad0Opsz48'
import IconSettingsSuggestFill0Wght400Grad0Opsz48 from '../components/SettingsSuggestFill0Wght400Grad0Opsz48'
import IconSettingsSuggestFill0Wght500Grad0Opsz48 from '../components/SettingsSuggestFill0Wght500Grad0Opsz48'
import IconSettingsSuggestFill0Wght600Grad0Opsz48 from '../components/SettingsSuggestFill0Wght600Grad0Opsz48'
import IconSettingsSuggestFill0Wght700Grad0Opsz48 from '../components/SettingsSuggestFill0Wght700Grad0Opsz48'
import IconSettingsSuggestFill1Wght100Grad0Opsz48 from '../components/SettingsSuggestFill1Wght100Grad0Opsz48'
import IconSettingsSuggestFill1Wght200Grad0Opsz48 from '../components/SettingsSuggestFill1Wght200Grad0Opsz48'
import IconSettingsSuggestFill1Wght300Grad0Opsz48 from '../components/SettingsSuggestFill1Wght300Grad0Opsz48'
import IconSettingsSuggestFill1Wght400Grad0Opsz48 from '../components/SettingsSuggestFill1Wght400Grad0Opsz48'
import IconSettingsSuggestFill1Wght500Grad0Opsz48 from '../components/SettingsSuggestFill1Wght500Grad0Opsz48'
import IconSettingsSuggestFill1Wght600Grad0Opsz48 from '../components/SettingsSuggestFill1Wght600Grad0Opsz48'
import IconSettingsSuggestFill1Wght700Grad0Opsz48 from '../components/SettingsSuggestFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsSuggest = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsSuggestFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsSuggestFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsSuggestFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsSuggestFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsSuggestFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsSuggestFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsSuggestFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsSuggestFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsSuggestFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsSuggestFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsSuggestFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsSuggestFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsSuggestFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsSuggestFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
