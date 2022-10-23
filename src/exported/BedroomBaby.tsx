import IconBedroomBabyFill0Wght100Grad0Opsz48 from '../components/BedroomBabyFill0Wght100Grad0Opsz48'
import IconBedroomBabyFill0Wght200Grad0Opsz48 from '../components/BedroomBabyFill0Wght200Grad0Opsz48'
import IconBedroomBabyFill0Wght300Grad0Opsz48 from '../components/BedroomBabyFill0Wght300Grad0Opsz48'
import IconBedroomBabyFill0Wght400Grad0Opsz48 from '../components/BedroomBabyFill0Wght400Grad0Opsz48'
import IconBedroomBabyFill0Wght500Grad0Opsz48 from '../components/BedroomBabyFill0Wght500Grad0Opsz48'
import IconBedroomBabyFill0Wght600Grad0Opsz48 from '../components/BedroomBabyFill0Wght600Grad0Opsz48'
import IconBedroomBabyFill0Wght700Grad0Opsz48 from '../components/BedroomBabyFill0Wght700Grad0Opsz48'
import IconBedroomBabyFill1Wght100Grad0Opsz48 from '../components/BedroomBabyFill1Wght100Grad0Opsz48'
import IconBedroomBabyFill1Wght200Grad0Opsz48 from '../components/BedroomBabyFill1Wght200Grad0Opsz48'
import IconBedroomBabyFill1Wght300Grad0Opsz48 from '../components/BedroomBabyFill1Wght300Grad0Opsz48'
import IconBedroomBabyFill1Wght400Grad0Opsz48 from '../components/BedroomBabyFill1Wght400Grad0Opsz48'
import IconBedroomBabyFill1Wght500Grad0Opsz48 from '../components/BedroomBabyFill1Wght500Grad0Opsz48'
import IconBedroomBabyFill1Wght600Grad0Opsz48 from '../components/BedroomBabyFill1Wght600Grad0Opsz48'
import IconBedroomBabyFill1Wght700Grad0Opsz48 from '../components/BedroomBabyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBedroomBaby = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBedroomBabyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBedroomBabyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBedroomBabyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBedroomBabyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBedroomBabyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBedroomBabyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBedroomBabyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBedroomBabyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBedroomBabyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBedroomBabyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBedroomBabyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBedroomBabyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBedroomBabyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBedroomBabyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
