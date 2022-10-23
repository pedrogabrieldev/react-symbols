import IconFormsAddOnFill0Wght100Grad0Opsz48 from '../components/FormsAddOnFill0Wght100Grad0Opsz48'
import IconFormsAddOnFill0Wght200Grad0Opsz48 from '../components/FormsAddOnFill0Wght200Grad0Opsz48'
import IconFormsAddOnFill0Wght300Grad0Opsz48 from '../components/FormsAddOnFill0Wght300Grad0Opsz48'
import IconFormsAddOnFill0Wght400Grad0Opsz48 from '../components/FormsAddOnFill0Wght400Grad0Opsz48'
import IconFormsAddOnFill0Wght500Grad0Opsz48 from '../components/FormsAddOnFill0Wght500Grad0Opsz48'
import IconFormsAddOnFill0Wght600Grad0Opsz48 from '../components/FormsAddOnFill0Wght600Grad0Opsz48'
import IconFormsAddOnFill0Wght700Grad0Opsz48 from '../components/FormsAddOnFill0Wght700Grad0Opsz48'
import IconFormsAddOnFill1Wght100Grad0Opsz48 from '../components/FormsAddOnFill1Wght100Grad0Opsz48'
import IconFormsAddOnFill1Wght200Grad0Opsz48 from '../components/FormsAddOnFill1Wght200Grad0Opsz48'
import IconFormsAddOnFill1Wght300Grad0Opsz48 from '../components/FormsAddOnFill1Wght300Grad0Opsz48'
import IconFormsAddOnFill1Wght400Grad0Opsz48 from '../components/FormsAddOnFill1Wght400Grad0Opsz48'
import IconFormsAddOnFill1Wght500Grad0Opsz48 from '../components/FormsAddOnFill1Wght500Grad0Opsz48'
import IconFormsAddOnFill1Wght600Grad0Opsz48 from '../components/FormsAddOnFill1Wght600Grad0Opsz48'
import IconFormsAddOnFill1Wght700Grad0Opsz48 from '../components/FormsAddOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormsAddOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormsAddOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormsAddOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormsAddOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormsAddOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormsAddOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormsAddOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormsAddOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormsAddOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormsAddOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormsAddOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormsAddOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormsAddOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormsAddOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormsAddOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
