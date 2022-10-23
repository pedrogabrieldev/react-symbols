import IconReportOffFill0Wght100Grad0Opsz48 from '../components/ReportOffFill0Wght100Grad0Opsz48'
import IconReportOffFill0Wght200Grad0Opsz48 from '../components/ReportOffFill0Wght200Grad0Opsz48'
import IconReportOffFill0Wght300Grad0Opsz48 from '../components/ReportOffFill0Wght300Grad0Opsz48'
import IconReportOffFill0Wght400Grad0Opsz48 from '../components/ReportOffFill0Wght400Grad0Opsz48'
import IconReportOffFill0Wght500Grad0Opsz48 from '../components/ReportOffFill0Wght500Grad0Opsz48'
import IconReportOffFill0Wght600Grad0Opsz48 from '../components/ReportOffFill0Wght600Grad0Opsz48'
import IconReportOffFill0Wght700Grad0Opsz48 from '../components/ReportOffFill0Wght700Grad0Opsz48'
import IconReportOffFill1Wght100Grad0Opsz48 from '../components/ReportOffFill1Wght100Grad0Opsz48'
import IconReportOffFill1Wght200Grad0Opsz48 from '../components/ReportOffFill1Wght200Grad0Opsz48'
import IconReportOffFill1Wght300Grad0Opsz48 from '../components/ReportOffFill1Wght300Grad0Opsz48'
import IconReportOffFill1Wght400Grad0Opsz48 from '../components/ReportOffFill1Wght400Grad0Opsz48'
import IconReportOffFill1Wght500Grad0Opsz48 from '../components/ReportOffFill1Wght500Grad0Opsz48'
import IconReportOffFill1Wght600Grad0Opsz48 from '../components/ReportOffFill1Wght600Grad0Opsz48'
import IconReportOffFill1Wght700Grad0Opsz48 from '../components/ReportOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReportOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReportOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReportOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReportOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReportOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReportOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReportOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReportOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReportOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReportOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReportOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReportOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReportOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReportOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReportOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
