import IconLocalLaundryServiceFill0Wght100Grad0Opsz48 from '../components/LocalLaundryServiceFill0Wght100Grad0Opsz48'
import IconLocalLaundryServiceFill0Wght200Grad0Opsz48 from '../components/LocalLaundryServiceFill0Wght200Grad0Opsz48'
import IconLocalLaundryServiceFill0Wght300Grad0Opsz48 from '../components/LocalLaundryServiceFill0Wght300Grad0Opsz48'
import IconLocalLaundryServiceFill0Wght400Grad0Opsz48 from '../components/LocalLaundryServiceFill0Wght400Grad0Opsz48'
import IconLocalLaundryServiceFill0Wght500Grad0Opsz48 from '../components/LocalLaundryServiceFill0Wght500Grad0Opsz48'
import IconLocalLaundryServiceFill0Wght600Grad0Opsz48 from '../components/LocalLaundryServiceFill0Wght600Grad0Opsz48'
import IconLocalLaundryServiceFill0Wght700Grad0Opsz48 from '../components/LocalLaundryServiceFill0Wght700Grad0Opsz48'
import IconLocalLaundryServiceFill1Wght100Grad0Opsz48 from '../components/LocalLaundryServiceFill1Wght100Grad0Opsz48'
import IconLocalLaundryServiceFill1Wght200Grad0Opsz48 from '../components/LocalLaundryServiceFill1Wght200Grad0Opsz48'
import IconLocalLaundryServiceFill1Wght300Grad0Opsz48 from '../components/LocalLaundryServiceFill1Wght300Grad0Opsz48'
import IconLocalLaundryServiceFill1Wght400Grad0Opsz48 from '../components/LocalLaundryServiceFill1Wght400Grad0Opsz48'
import IconLocalLaundryServiceFill1Wght500Grad0Opsz48 from '../components/LocalLaundryServiceFill1Wght500Grad0Opsz48'
import IconLocalLaundryServiceFill1Wght600Grad0Opsz48 from '../components/LocalLaundryServiceFill1Wght600Grad0Opsz48'
import IconLocalLaundryServiceFill1Wght700Grad0Opsz48 from '../components/LocalLaundryServiceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalLaundryService = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalLaundryServiceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalLaundryServiceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalLaundryServiceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalLaundryServiceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalLaundryServiceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalLaundryServiceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalLaundryServiceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalLaundryServiceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalLaundryServiceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalLaundryServiceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalLaundryServiceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalLaundryServiceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalLaundryServiceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalLaundryServiceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
