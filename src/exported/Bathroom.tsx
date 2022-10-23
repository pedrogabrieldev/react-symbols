import IconBathroomFill0Wght100Grad0Opsz48 from '../components/BathroomFill0Wght100Grad0Opsz48'
import IconBathroomFill0Wght200Grad0Opsz48 from '../components/BathroomFill0Wght200Grad0Opsz48'
import IconBathroomFill0Wght300Grad0Opsz48 from '../components/BathroomFill0Wght300Grad0Opsz48'
import IconBathroomFill0Wght400Grad0Opsz48 from '../components/BathroomFill0Wght400Grad0Opsz48'
import IconBathroomFill0Wght500Grad0Opsz48 from '../components/BathroomFill0Wght500Grad0Opsz48'
import IconBathroomFill0Wght600Grad0Opsz48 from '../components/BathroomFill0Wght600Grad0Opsz48'
import IconBathroomFill0Wght700Grad0Opsz48 from '../components/BathroomFill0Wght700Grad0Opsz48'
import IconBathroomFill1Wght100Grad0Opsz48 from '../components/BathroomFill1Wght100Grad0Opsz48'
import IconBathroomFill1Wght200Grad0Opsz48 from '../components/BathroomFill1Wght200Grad0Opsz48'
import IconBathroomFill1Wght300Grad0Opsz48 from '../components/BathroomFill1Wght300Grad0Opsz48'
import IconBathroomFill1Wght400Grad0Opsz48 from '../components/BathroomFill1Wght400Grad0Opsz48'
import IconBathroomFill1Wght500Grad0Opsz48 from '../components/BathroomFill1Wght500Grad0Opsz48'
import IconBathroomFill1Wght600Grad0Opsz48 from '../components/BathroomFill1Wght600Grad0Opsz48'
import IconBathroomFill1Wght700Grad0Opsz48 from '../components/BathroomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBathroom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBathroomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBathroomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBathroomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBathroomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBathroomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBathroomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBathroomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBathroomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBathroomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBathroomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBathroomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBathroomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBathroomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBathroomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
