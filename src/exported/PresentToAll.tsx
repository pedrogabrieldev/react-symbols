import IconPresentToAllFill0Wght100Grad0Opsz48 from '../components/PresentToAllFill0Wght100Grad0Opsz48'
import IconPresentToAllFill0Wght200Grad0Opsz48 from '../components/PresentToAllFill0Wght200Grad0Opsz48'
import IconPresentToAllFill0Wght300Grad0Opsz48 from '../components/PresentToAllFill0Wght300Grad0Opsz48'
import IconPresentToAllFill0Wght400Grad0Opsz48 from '../components/PresentToAllFill0Wght400Grad0Opsz48'
import IconPresentToAllFill0Wght500Grad0Opsz48 from '../components/PresentToAllFill0Wght500Grad0Opsz48'
import IconPresentToAllFill0Wght600Grad0Opsz48 from '../components/PresentToAllFill0Wght600Grad0Opsz48'
import IconPresentToAllFill0Wght700Grad0Opsz48 from '../components/PresentToAllFill0Wght700Grad0Opsz48'
import IconPresentToAllFill1Wght100Grad0Opsz48 from '../components/PresentToAllFill1Wght100Grad0Opsz48'
import IconPresentToAllFill1Wght200Grad0Opsz48 from '../components/PresentToAllFill1Wght200Grad0Opsz48'
import IconPresentToAllFill1Wght300Grad0Opsz48 from '../components/PresentToAllFill1Wght300Grad0Opsz48'
import IconPresentToAllFill1Wght400Grad0Opsz48 from '../components/PresentToAllFill1Wght400Grad0Opsz48'
import IconPresentToAllFill1Wght500Grad0Opsz48 from '../components/PresentToAllFill1Wght500Grad0Opsz48'
import IconPresentToAllFill1Wght600Grad0Opsz48 from '../components/PresentToAllFill1Wght600Grad0Opsz48'
import IconPresentToAllFill1Wght700Grad0Opsz48 from '../components/PresentToAllFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPresentToAll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPresentToAllFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPresentToAllFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPresentToAllFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPresentToAllFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPresentToAllFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPresentToAllFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPresentToAllFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPresentToAllFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPresentToAllFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPresentToAllFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPresentToAllFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPresentToAllFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPresentToAllFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPresentToAllFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
