import IconAdminPanelSettingsFill0Wght100Grad0Opsz48 from '../components/AdminPanelSettingsFill0Wght100Grad0Opsz48'
import IconAdminPanelSettingsFill0Wght200Grad0Opsz48 from '../components/AdminPanelSettingsFill0Wght200Grad0Opsz48'
import IconAdminPanelSettingsFill0Wght300Grad0Opsz48 from '../components/AdminPanelSettingsFill0Wght300Grad0Opsz48'
import IconAdminPanelSettingsFill0Wght400Grad0Opsz48 from '../components/AdminPanelSettingsFill0Wght400Grad0Opsz48'
import IconAdminPanelSettingsFill0Wght500Grad0Opsz48 from '../components/AdminPanelSettingsFill0Wght500Grad0Opsz48'
import IconAdminPanelSettingsFill0Wght600Grad0Opsz48 from '../components/AdminPanelSettingsFill0Wght600Grad0Opsz48'
import IconAdminPanelSettingsFill0Wght700Grad0Opsz48 from '../components/AdminPanelSettingsFill0Wght700Grad0Opsz48'
import IconAdminPanelSettingsFill1Wght100Grad0Opsz48 from '../components/AdminPanelSettingsFill1Wght100Grad0Opsz48'
import IconAdminPanelSettingsFill1Wght200Grad0Opsz48 from '../components/AdminPanelSettingsFill1Wght200Grad0Opsz48'
import IconAdminPanelSettingsFill1Wght300Grad0Opsz48 from '../components/AdminPanelSettingsFill1Wght300Grad0Opsz48'
import IconAdminPanelSettingsFill1Wght400Grad0Opsz48 from '../components/AdminPanelSettingsFill1Wght400Grad0Opsz48'
import IconAdminPanelSettingsFill1Wght500Grad0Opsz48 from '../components/AdminPanelSettingsFill1Wght500Grad0Opsz48'
import IconAdminPanelSettingsFill1Wght600Grad0Opsz48 from '../components/AdminPanelSettingsFill1Wght600Grad0Opsz48'
import IconAdminPanelSettingsFill1Wght700Grad0Opsz48 from '../components/AdminPanelSettingsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAdminPanelSettings = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAdminPanelSettingsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAdminPanelSettingsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAdminPanelSettingsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAdminPanelSettingsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAdminPanelSettingsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAdminPanelSettingsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAdminPanelSettingsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAdminPanelSettingsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAdminPanelSettingsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAdminPanelSettingsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAdminPanelSettingsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAdminPanelSettingsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAdminPanelSettingsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAdminPanelSettingsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
