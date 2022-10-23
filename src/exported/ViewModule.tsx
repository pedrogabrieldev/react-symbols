import IconViewModuleFill0Wght100Grad0Opsz48 from '../components/ViewModuleFill0Wght100Grad0Opsz48'
import IconViewModuleFill0Wght200Grad0Opsz48 from '../components/ViewModuleFill0Wght200Grad0Opsz48'
import IconViewModuleFill0Wght300Grad0Opsz48 from '../components/ViewModuleFill0Wght300Grad0Opsz48'
import IconViewModuleFill0Wght400Grad0Opsz48 from '../components/ViewModuleFill0Wght400Grad0Opsz48'
import IconViewModuleFill0Wght500Grad0Opsz48 from '../components/ViewModuleFill0Wght500Grad0Opsz48'
import IconViewModuleFill0Wght600Grad0Opsz48 from '../components/ViewModuleFill0Wght600Grad0Opsz48'
import IconViewModuleFill0Wght700Grad0Opsz48 from '../components/ViewModuleFill0Wght700Grad0Opsz48'
import IconViewModuleFill1Wght100Grad0Opsz48 from '../components/ViewModuleFill1Wght100Grad0Opsz48'
import IconViewModuleFill1Wght200Grad0Opsz48 from '../components/ViewModuleFill1Wght200Grad0Opsz48'
import IconViewModuleFill1Wght300Grad0Opsz48 from '../components/ViewModuleFill1Wght300Grad0Opsz48'
import IconViewModuleFill1Wght400Grad0Opsz48 from '../components/ViewModuleFill1Wght400Grad0Opsz48'
import IconViewModuleFill1Wght500Grad0Opsz48 from '../components/ViewModuleFill1Wght500Grad0Opsz48'
import IconViewModuleFill1Wght600Grad0Opsz48 from '../components/ViewModuleFill1Wght600Grad0Opsz48'
import IconViewModuleFill1Wght700Grad0Opsz48 from '../components/ViewModuleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewModule = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewModuleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewModuleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewModuleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewModuleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewModuleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewModuleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewModuleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewModuleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewModuleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewModuleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewModuleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewModuleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewModuleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewModuleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
