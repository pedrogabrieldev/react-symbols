import IconArrowBackIosNewFill0Wght100Grad0Opsz48 from '../components/ArrowBackIosNewFill0Wght100Grad0Opsz48'
import IconArrowBackIosNewFill0Wght200Grad0Opsz48 from '../components/ArrowBackIosNewFill0Wght200Grad0Opsz48'
import IconArrowBackIosNewFill0Wght300Grad0Opsz48 from '../components/ArrowBackIosNewFill0Wght300Grad0Opsz48'
import IconArrowBackIosNewFill0Wght400Grad0Opsz48 from '../components/ArrowBackIosNewFill0Wght400Grad0Opsz48'
import IconArrowBackIosNewFill0Wght500Grad0Opsz48 from '../components/ArrowBackIosNewFill0Wght500Grad0Opsz48'
import IconArrowBackIosNewFill0Wght600Grad0Opsz48 from '../components/ArrowBackIosNewFill0Wght600Grad0Opsz48'
import IconArrowBackIosNewFill0Wght700Grad0Opsz48 from '../components/ArrowBackIosNewFill0Wght700Grad0Opsz48'
import IconArrowBackIosNewFill1Wght100Grad0Opsz48 from '../components/ArrowBackIosNewFill1Wght100Grad0Opsz48'
import IconArrowBackIosNewFill1Wght200Grad0Opsz48 from '../components/ArrowBackIosNewFill1Wght200Grad0Opsz48'
import IconArrowBackIosNewFill1Wght300Grad0Opsz48 from '../components/ArrowBackIosNewFill1Wght300Grad0Opsz48'
import IconArrowBackIosNewFill1Wght400Grad0Opsz48 from '../components/ArrowBackIosNewFill1Wght400Grad0Opsz48'
import IconArrowBackIosNewFill1Wght500Grad0Opsz48 from '../components/ArrowBackIosNewFill1Wght500Grad0Opsz48'
import IconArrowBackIosNewFill1Wght600Grad0Opsz48 from '../components/ArrowBackIosNewFill1Wght600Grad0Opsz48'
import IconArrowBackIosNewFill1Wght700Grad0Opsz48 from '../components/ArrowBackIosNewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowBackIosNew = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowBackIosNewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowBackIosNewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowBackIosNewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowBackIosNewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowBackIosNewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowBackIosNewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowBackIosNewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowBackIosNewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowBackIosNewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowBackIosNewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowBackIosNewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowBackIosNewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowBackIosNewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowBackIosNewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
