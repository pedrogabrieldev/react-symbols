import IconPermDataSettingFill0Wght100Grad0Opsz48 from '../components/PermDataSettingFill0Wght100Grad0Opsz48'
import IconPermDataSettingFill0Wght200Grad0Opsz48 from '../components/PermDataSettingFill0Wght200Grad0Opsz48'
import IconPermDataSettingFill0Wght300Grad0Opsz48 from '../components/PermDataSettingFill0Wght300Grad0Opsz48'
import IconPermDataSettingFill0Wght400Grad0Opsz48 from '../components/PermDataSettingFill0Wght400Grad0Opsz48'
import IconPermDataSettingFill0Wght500Grad0Opsz48 from '../components/PermDataSettingFill0Wght500Grad0Opsz48'
import IconPermDataSettingFill0Wght600Grad0Opsz48 from '../components/PermDataSettingFill0Wght600Grad0Opsz48'
import IconPermDataSettingFill0Wght700Grad0Opsz48 from '../components/PermDataSettingFill0Wght700Grad0Opsz48'
import IconPermDataSettingFill1Wght100Grad0Opsz48 from '../components/PermDataSettingFill1Wght100Grad0Opsz48'
import IconPermDataSettingFill1Wght200Grad0Opsz48 from '../components/PermDataSettingFill1Wght200Grad0Opsz48'
import IconPermDataSettingFill1Wght300Grad0Opsz48 from '../components/PermDataSettingFill1Wght300Grad0Opsz48'
import IconPermDataSettingFill1Wght400Grad0Opsz48 from '../components/PermDataSettingFill1Wght400Grad0Opsz48'
import IconPermDataSettingFill1Wght500Grad0Opsz48 from '../components/PermDataSettingFill1Wght500Grad0Opsz48'
import IconPermDataSettingFill1Wght600Grad0Opsz48 from '../components/PermDataSettingFill1Wght600Grad0Opsz48'
import IconPermDataSettingFill1Wght700Grad0Opsz48 from '../components/PermDataSettingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPermDataSetting = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPermDataSettingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPermDataSettingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPermDataSettingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPermDataSettingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPermDataSettingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPermDataSettingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPermDataSettingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPermDataSettingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPermDataSettingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPermDataSettingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPermDataSettingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPermDataSettingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPermDataSettingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPermDataSettingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
